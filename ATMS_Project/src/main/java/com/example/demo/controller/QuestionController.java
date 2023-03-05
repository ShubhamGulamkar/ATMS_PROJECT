package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Question;
import com.example.demo.services.QuestionService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class QuestionController {
	QuestionService qserv;
	
	public List<Question> getQueList()
	{
		return qserv.getQueList();
	}

}
