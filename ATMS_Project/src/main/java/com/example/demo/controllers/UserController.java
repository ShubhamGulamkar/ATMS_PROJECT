package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService userv;
	
	//Login Check
	@PostMapping("/checkLogin")
	public User checkLogin(@RequestBody LoginCheck lcheck)
	{
		return userv.checkLogin(lcheck.getUser_name(), lcheck.getPassword());
	}
	
	//registration
	//save()
	
	//Admin-Organizer Approval
	@GetMapping("/getAllUser")
	public List<User> getAllByStatus()
	{
		return userv.getAllByStatus();
	}
	@PutMapping("/changeStatus")
	public int changeStatus(@RequestParam("user_id") int id) {
		return userv.changeStatus(id);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@GetMapping("/all")
	public List<User> getAll(){
		
		return userv.getAll();
	}
	
	
	//getOne  //http://localhost:8080/getOne?user_id=1
	@GetMapping("/getOne")
	public User getOne(@RequestParam("user_id") int user_id)
	{
		return userv.getOne(user_id);
	}
	
	 //http://localhost:8080/update?user_id=1&user_name=VijayS
	@PutMapping("/update")    
	public int updateUserName(@RequestParam("user_id") int user_id,@RequestParam("user_name") String user_name)
	{
		return userv.updateUserName(user_id, user_name);
	}
	
	
	
//	@PostMapping("/checkLogin")
//	public User checkLogin(@RequestBody LoginCheck lcheck)
//	{
//		return userv.getLogin(lcheck.getUser_name(), lcheck.getPassword());
//	}
}
