package com.ossprac.openmind.repository;

import com.ossprac.openmind.domain.Event;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class EventRepository {

    private final EntityManager em;

    public void save(Event event) {
        em.persist(event);
    }

    public Event findOne(Long id) {
        return em.find(Event.class, id);
    }

    public List<Event> findAll() {
        return em.createQuery("select e from Event e", Event.class)
                .getResultList();
    }
}
