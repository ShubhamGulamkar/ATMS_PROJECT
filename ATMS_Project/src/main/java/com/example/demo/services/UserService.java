package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.User;
import com.example.demo.entities.UserType;
import com.example.demo.repositories.UserRepositories;

@Service
public class UserService {

	@Autowired
	UserRepositories urepo;
	
	//Login Check
	public User checkLogin(String user_name, String password)
	{
		User u=null;
		
		Optional<User> ol = urepo.checkLogin(user_name, password);
		try {
			u = ol.get();
		}
		catch(Exception e) {
			u = null;
		}
		return u;
	}
	
	//registration
	
	public User saveUser(User u)
	{
		return urepo.save(u);
	}
	
	//Logged in Participant and User
	public User getById(int id)
	{
		return urepo.findById(id).get();
	}
	
	//Admin-Organizer Approval
	public List<User> getAllByStatus(){
		return urepo.getAllByStatus();
	}
	public int changeStatus(int id)
	{
		return urepo.changeStatus(id);
	}
	
	
	
	
	
	
	
	
	
	
	//Fetch
	public List<User> getAll(){
		return urepo.findAll();
	}
	
	
	
	//getOne()
	
	public User getOne(int user_id)
	{
		//return urepo.findById(user_id);
		
		Optional<User> opt = urepo.findById(user_id);
		User u = null;
		try
		{
			u = opt.get();
		}
		catch(Exception e)
		{
			u = null;
		}
		return u;
	}
	
	//update
	public int updateUserName( int user_id, String user_name)
	{
		return urepo.updateUserName(user_id, user_name);
	}
	
	
//	public User getLogin(String user_name, String password)
//	{
//		User u;
//		
//		Optional<User> ol = urepo.getLogin(user_name,password);
//		try {
//			u = ol.get();
//		}
//		catch(Exception e) {
//			u=null;
//		}
//		return u;
//	}
	
	
}
