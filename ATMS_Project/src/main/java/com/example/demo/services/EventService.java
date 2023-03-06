package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Event;
import com.example.demo.repositories.EventRepositories;

@Service
public class EventService {

	@Autowired
	EventRepositories erepo;
	
	//add event
	public Event addEvent(Event e)
	{
		return erepo.save(e);
	}
}
