package com.example.demo.services;


import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;


@Service
public class UserService {

	@Autowired
	UserRepository utrepo;
	
	public User getUser(String user_name,String password)
	{
		User u;
		Optional<User> ur = utrepo.getUser(user_name,password);
		
		try
		{
			u = ur.get();
			
		}
		catch(Exception e)
		{
			u = null;
		}
		return u;
	}
	public List<User> getAll()  ////This Method is Called in Controller
	{
		return utrepo.findAll();		////findAll is the method given by the repository interface
	}
	public User save(User u)
	{
		return utrepo.save(u);
	}
	
	public User getone(int user_id)	
	{
		Optional<User> opt = utrepo.findById(user_id);
		User s = null;
		try
		{
			s=opt.get();
		}
		catch(NoSuchElementException e)
		{
			s = null;
		}
		return s;
	}
	
	//update
		public int updateUserName( int user_id, String user_name)
		{
			return utrepo.updateUserName(user_id, user_name);
		}
		
		public void delete(int id)
		{
			utrepo.deleteById(id);
		}
}
