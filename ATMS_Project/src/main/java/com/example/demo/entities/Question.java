package com.example.demo.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="question")
public class Question {
	
	@Id
	int question_id;
	String question;
	@JsonIgnoreProperties("question")
	@OneToMany(mappedBy = "question_id",cascade = CascadeType.ALL)
	Set<User> user;
	
	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Question(int question_id, String question) {
		super();
		this.question_id = question_id;
		this.question = question;
	}
	//registration
		public Question(int question_id) {
			
			this.question_id = question_id;
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
