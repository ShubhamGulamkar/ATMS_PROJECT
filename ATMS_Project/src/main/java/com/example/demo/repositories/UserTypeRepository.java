package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User_type;

@Repository
public interface UserTypeRepository extends JpaRepository<User_type, Integer> {
	

}
