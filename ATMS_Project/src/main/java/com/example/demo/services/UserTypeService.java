package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User_type;
import com.example.demo.repositories.UserTypeRepository;

@Service
public class UserTypeService {

	@Autowired
	UserTypeRepository urepo;
	
	public User_type getTypeId(int id)
	{
		return urepo.findById(id).get();
	}
}
