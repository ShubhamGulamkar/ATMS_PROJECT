package com.example.demo.entities;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="participant")
public class Participant {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int participant_id;
	String first_name,last_name,gender,city,mobile,email;
	Date birthdate;
	
	@JsonIgnoreProperties("participant")
	@OneToOne
	@JoinColumn(name="user_id")
	User user_id;
	
	public Participant() {
		//super();
		// TODO Auto-generated constructor stub
	}
	//registration
		public Participant(String first_name, String last_name, String gender, String city, String mobile, String email,
				Date birthdate, User user_id) {
			
			this.first_name = first_name;
			this.last_name = last_name;
			this.gender = gender;
			this.city = city;
			this.mobile = mobile;
			this.email = email;
			this.birthdate = birthdate;
			this.user_id = user_id;
		}

		public int getParticipant_id() {
			return participant_id;
		}
		public void setParticipant_id(int participant_id) {
			this.participant_id = participant_id;
		}

		public String getFirst_name() {
			return first_name;
		}

		public void setFirst_name(String first_name) {
			this.first_name = first_name;
		}

		public String getLast_name() {
			return last_name;
		}

		public void setLast_name(String last_name) {
			this.last_name = last_name;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public String getMobile() {
			return mobile;
		}

		public void setMobile(String mobile) {
			this.mobile = mobile;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public Date getBirthdate() {
			return birthdate;
		}

		public void setBirthdate(Date birthdate) {
			this.birthdate = birthdate;
		}

		public User getUser_id() {
			return user_id;
		}

		public void setUser_id(User user_id) {
			this.user_id = user_id;
		}


}
