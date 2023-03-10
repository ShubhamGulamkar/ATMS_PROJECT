package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Organizer;
import com.example.demo.entities.OrganizerReg;
import com.example.demo.entities.Question;
import com.example.demo.entities.User;
import com.example.demo.entities.User_type;
import com.example.demo.services.OrganizerService;
import com.example.demo.services.QuestionService;
import com.example.demo.services.UserService;
import com.example.demo.services.UserTypeService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class OrganizerController {
	
	@Autowired
	OrganizerService oserv;
	@Autowired
	UserService userv;
	@Autowired
	UserTypeService utserv;
	
	@Autowired
	QuestionService qserv;
	
	@GetMapping("/getOrganizer")
	public Organizer getOrganizerById(@RequestParam ("user_id") int id)
	{
		User u = userv.getById(id);
		System.out.println(u);
		return oserv.getOrganizer(u);
		
	}
	//Organizer registration
		@PostMapping("/regOrganizer")
		public Organizer regOrganizer(@RequestBody OrganizerReg o)
		{
			//System.out.println(o.getUser_name());
			User_type ut = utserv.getTypeId(2);
			Question queid = new Question(o.getQuestion_id());
			User u = new User(o.getUser_name(),o.getPassword(),o.getAnswer(), queid,  ut, false);
			User saved = userv.save(u);
			Organizer org = new Organizer(o.getOrganization_name(), o.getRegistration_no(), o.getCity(), o.getMobile(), o.getEmail(), saved);
			
			return oserv.saveOrganizer(org);
			
		}

}
