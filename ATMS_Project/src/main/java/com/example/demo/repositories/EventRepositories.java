package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Event;

@Transactional
@Repository
public interface EventRepositories extends JpaRepository<Event, Integer> {
	
	//add Event
	//save();
}
