package com.example.demo.controller;





import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.User;
import com.example.demo.entities.Usercheck;
import com.example.demo.services.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {
	
	@Autowired
	UserService uservice;
	
	@PostMapping("/checkLogin")
	public User cheklogin(@RequestBody Usercheck ucheck)
	{
		return uservice.getUser(ucheck.getUser_name(), ucheck.getPassword());
	}
	@GetMapping("/all")
	public List<User> getAll()
	{
		return uservice.getAll();	///giving call to getAll method of service class
	}
	
	@PostMapping("/save")
	public User save(@RequestBody User s)
	{
		return uservice.save(s);	///giving call to getAll method of service class
	}
	
	@GetMapping("/getuser")	///http://localhost:8080/getuser?user_id=1
	public User getuser(@RequestParam("user_id") int user_id)
	{
		return uservice.getone(user_id);
	}
	
	 //http://localhost:8080/update?user_id=1&user_name=VijayS
		@PutMapping("/update")    
		public int updateUserName(@RequestParam("user_id") int user_id,@RequestParam("user_name") String user_name)
		{
			return uservice.updateUserName(user_id, user_name);
		}
		
		@DeleteMapping("/delete")
		public void delete(@RequestParam("user_id") int id)
		{
			uservice.delete(id);
		}
		

}
