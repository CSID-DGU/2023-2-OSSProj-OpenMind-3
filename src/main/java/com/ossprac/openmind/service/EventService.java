package com.ossprac.openmind.service;

import com.ossprac.openmind.domain.Event;
import com.ossprac.openmind.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly=true)
@RequiredArgsConstructor
public class EventService {

    private EventRepository eventRepository;

    @Transactional
    public void saveEvent(Event event) {
        eventRepository.save(event);
    }

    public Event getEvent(Long eventId) {
        return eventRepository.findOne(eventId);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
}
