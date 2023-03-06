package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.User;

@Transactional
@Repository
public interface UserRepositories extends JpaRepository<User, Integer> {
	
	//registration
	//save();
	
	//Logged in Participant and User
	//findById();
	
	//Admin-Organizer Approval
	@Query("select u from User u where status=0 ")
	public List<User> getAllByStatus();
	@Modifying
	@Query("update User u set u.status=1 where u.user_id=:id")
	public int changeStatus(@Param("id")int id);
	
	
	
	
	
	
	
	//executeUpdate()
	@Modifying
	@Query("update User u set u.user_name = :user_name where u.user_id = :user_id")
	public int updateUserName(@Param("user_id")int user_id, @Param("user_name")String user_name);
	
	
	@Query("select u from User u where user_name = :user_name and password = :password")
	public Optional<User> checkLogin(@Param("user_name") String user_name, @Param("password") String password);

//	@Query("select u from User u where user_name = :user_name and password = :password")
//	public Optional<User> getLogin( String user_name, String password);
//	
}
