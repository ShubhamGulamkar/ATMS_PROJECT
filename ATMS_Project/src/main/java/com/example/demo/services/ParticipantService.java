package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Participant;
import com.example.demo.repositories.ParticipantRepository;

@Service
public class ParticipantService {
	
	@Autowired
	ParticipantRepository prepo;
	
	public Participant saveparticipant(Participant p)
	{
		return prepo.save(p);
	}

}
