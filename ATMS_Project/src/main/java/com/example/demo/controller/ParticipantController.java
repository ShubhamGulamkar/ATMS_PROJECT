package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Participant;
import com.example.demo.entities.ParticipantReg;
import com.example.demo.entities.Question;
import com.example.demo.entities.User;
import com.example.demo.entities.User_type;
import com.example.demo.services.ParticipantService;
import com.example.demo.services.QuestionService;
import com.example.demo.services.UserService;
import com.example.demo.services.UserTypeService;

@CrossOrigin(origins="http//localhost:3000")
@RestController
public class ParticipantController {

	@Autowired
	ParticipantService pserv;
	@Autowired
	UserService userv;
	@Autowired
	UserTypeService utserv;
	@Autowired
	QuestionService qserv;
	
	
	@PostMapping("/regParticipant")
	public Participant regParticipant(@RequestBody ParticipantReg p)
	{
		User_type ut = utserv.getTypeId(1);
		Question que = qserv.getQurId(2);
		User u = new User(p.getUser_name(),p.getPassword(),"Red",que,ut,true);
		User saved = userv.save(u);
		Participant part = new Participant(p.getFirst_name(), p.getLast_name(), p.getGender(), p.getCity(), p.getMobile(), p.getEmail(), p.getBirthdate(), saved);
		//System.out.println(part);
		return pserv.saveparticipant(part);
		
				
	}
	
}
