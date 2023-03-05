package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Organizer;
import com.example.demo.entities.User;
import com.example.demo.repositories.OrganizerRepository;

@Service
public class OrganizerService {

	@Autowired
	OrganizerRepository orepo;
	
	public Organizer getOrganizer(User u)
	{
		return orepo.getOrganizer(u);
	}
	//registration
		public Organizer saveOrganizer(Organizer org)
		{
			return orepo.save(org);
		}
}
