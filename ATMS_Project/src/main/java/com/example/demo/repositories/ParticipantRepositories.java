package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import com.example.demo.entities.Participant;
import com.example.demo.entities.User;

@Transactional
@Repository
public interface ParticipantRepositories extends JpaRepository<Participant, Integer> {

	//registration
	//save()
	
	//Logged in Participant
	@Query("select  p from Participant p where user_id=:u ")
	public Participant getParticipant(@Param("u")User u);
}
