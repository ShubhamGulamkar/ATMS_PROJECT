package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Organizer;
import com.example.demo.entities.User;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface OrganizerRepository extends JpaRepository<Organizer, Integer> {

	@Query("select o from Organizer o where user_id=:u")
	public Organizer getOrganizer(User u);
}
