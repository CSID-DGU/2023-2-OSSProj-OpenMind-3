package com.ossprac.openmind.calendar.service;

import com.ossprac.openmind.calendar.dto.EventRequestDto;
import com.ossprac.openmind.calendar.dto.EventResponseDto;
import com.ossprac.openmind.calendar.entity.Event;
import com.ossprac.openmind.calendar.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Transactional
    public ResponseEntity<?> addEvent(EventRequestDto eventRequestDto) {
        try {
            Event event = eventRequestDto.toEntity();
            log.info("event : {}", event);
            Event savedEvent;

            try {
                savedEvent = eventRepository.save(event);
            } catch (Exception e) {
                log.error("error : {}", e.getMessage());
                return ResponseEntity.badRequest().body(e.getMessage());
            }
            EventResponseDto response = getResponseEventDto(savedEvent);
            return ResponseEntity.ok().body(response);
        }
        catch (Exception e) {
            log.error("error : {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @Transactional(readOnly = true)
    public ResponseEntity<?> getEvent(Long eventId) {
        try {
            Event event = eventRepository.findById(eventId).orElse(null);
            EventResponseDto response = null;
            if (event != null) {
                response = getResponseEventDto(event);
            }
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            log.error("error : {}", e.getMessage());
            return null;
        }
    }

    private static EventResponseDto getResponseEventDto(Event savedEvent) {
        return EventResponseDto.builder()
                .id(savedEvent.getId())
                .title(savedEvent.getTitle())
                .description(savedEvent.getDescription())
                .startDate(savedEvent.getStartDate())
                .endDate(savedEvent.getEndDate())
                .build();
    }
}
