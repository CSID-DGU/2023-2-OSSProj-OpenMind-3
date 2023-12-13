package com.ossprac.openmind.calendar.service;

import com.ossprac.openmind.calendar.dto.EventRequestDto;
import com.ossprac.openmind.calendar.dto.EventResponseDto;
import com.ossprac.openmind.calendar.dto.EventUpdateRequestDto;
import com.ossprac.openmind.calendar.entity.Event;
import com.ossprac.openmind.calendar.repository.EventRepository;
import com.ossprac.openmind.team.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class EventService {

    @Autowired
    private final EventRepository eventRepository;
    private final TeamRepository teamRepository;

    @Transactional
    public EventResponseDto addEvent(EventRequestDto eventRequestDto) {
        Event event = eventRequestDto.toEntity();
        if (event.getStart().isAfter(event.getEnd())) {
            throw new IllegalArgumentException("startDate 가 endDate 보다 늦습니다.");
        }
        if (!event.getStart().equals(event.getEnd())) {
            event.setEnd(event.getEnd().plusDays(1));
        }
        Event savedEvent = eventRepository.save(event);
        teamRepository.findById(eventRequestDto.getTeamId()).ifPresent(savedEvent::setTeam);
        return getResponseEventDto(savedEvent);
    }

    @Transactional(readOnly = true)
    public EventResponseDto getEvent(Long eventId) {
        Event event = eventRepository.findById(eventId).orElseThrow();
        return getResponseEventDto(event);
    }

    @Transactional(readOnly = true)
    public List<EventResponseDto> getEventListByTeamId(Long teamId) {
        List<Event> eventList = eventRepository.findAllByTeamId(teamId);
        List<EventResponseDto> eventResponseDtoList = eventList.stream()
                .map(this::getResponseEventDto)
                .collect(Collectors.toList());
        return eventResponseDtoList;
    }

    public EventResponseDto updateEvent(Long eventId, EventUpdateRequestDto requestDto) {
        Event event = eventRepository.findById(eventId).orElseThrow();
        Event requestEvent = requestDto.toEntity();
        if (requestEvent.getStart().isAfter(requestEvent.getEnd())) {
            throw new IllegalArgumentException("startDate 가 endDate 보다 늦습니다.");
        }
        if (!requestEvent.getStart().equals(requestEvent.getEnd())) {
            requestEvent.setEnd(requestEvent.getEnd().plusDays(1));
        }
        event.update(requestEvent);
        Event savedEvent = eventRepository.save(event);
        return getResponseEventDto(savedEvent);
    }

    public void deleteEvent(Long eventId) {
        Event event = eventRepository.findById(eventId).orElseThrow();
        eventRepository.delete(event);
    }

    private EventResponseDto getResponseEventDto(Event savedEvent) {
        return EventResponseDto.builder()
                .id(savedEvent.getId())
                .title(savedEvent.getTitle())
                .description(savedEvent.getDescription())
                .start(savedEvent.getStart())
                .end(savedEvent.getEnd())
                .build();
    }
}
