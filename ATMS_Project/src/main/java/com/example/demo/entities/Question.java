package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="question")
public class Question {
	
	@Id
	int question_id;
	String question;
	
	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Question(int question_id, String question) {
		super();
		this.question_id = question_id;
		this.question = question;
	}
	public int getQuestion_id() {
		return question_id;
	}
	public void setQuestion_id(int question_id) {
		this.question_id = question_id;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}

}
