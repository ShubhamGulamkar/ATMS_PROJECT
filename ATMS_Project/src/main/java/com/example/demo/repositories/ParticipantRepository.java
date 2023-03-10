package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Participant;
import com.example.demo.entities.User;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface ParticipantRepository extends JpaRepository<Participant, Integer> {

	@Query("select p from Participant p where user_id=:u")
	public Participant getParticipant(User u);
}
