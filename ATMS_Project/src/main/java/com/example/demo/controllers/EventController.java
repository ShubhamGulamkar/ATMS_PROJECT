package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.entities.DummyEvent;
import com.example.demo.entities.Event;
import com.example.demo.entities.Organizer;
import com.example.demo.services.EventService;
import com.example.demo.services.OrganizerService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EventController {

	@Autowired
	EventService eserv;
	
	
	//add event
	@PostMapping("/addEvent")
	public Event addEvent(@RequestBody DummyEvent e)
	{
		//System.out.println(e);
		Category catid = new Category(e.getCategory_id());
		Organizer orgid = new Organizer(e.getOrganizer_id());
		Event ev = new Event(e.getEvent_name(), e.getLocation(), e.getDuration(), e.getOverview(), e.getDifficulty_level(), e.getThing_to_carry(), e.getPickup_location(), e.getDrop_location(), e.getInclusion(), e.getExclusion(), e.getSafety_guideline(), e.getRulebook(), e.getCancellation_policy(), e.getDatetime(), e.getPickup_time(), e.getDrop_time(), e.getPrice(), e.getTotal_seat(), catid, orgid);
		return eserv.addEvent(ev);
	}
	
}
