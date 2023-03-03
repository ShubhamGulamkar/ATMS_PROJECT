package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Modifying
	@Query("update User u set u.user_name = :user_name where u.user_id = :user_id")
	public int updateUserName(int user_id, String user_name);
	
	@Query("select u from User u where user_name = :user_name and password = :password")
	public Optional <User> getUser( String user_name, String password);

	
		
}
