package com.contact.dao;

import java.util.ArrayList;
import java.util.List;

import com.contact.model.Contact;

public class ContactDAO {

    static List<Contact> list =
            new ArrayList<Contact>();

    static {

        list.add(new Contact(
                1,
                "Neeraj",
                "9876543210",
                "neeraj@gmail.com"));
    }

    // Add Contact
    public void addContact(Contact c) {

        list.add(c);
    }

    // Get All Contacts
    public List<Contact> getAllContacts() {

        return list;
    }

    // Delete Contact
    public void deleteContact(int id) {

        for (Contact c : list) {

            if (c.getId() == id) {

                list.remove(c);
                break;
            }
        }
    }

    // Get By ID
    public Contact getContactById(int id) {

        for (Contact c : list) {

            if (c.getId() == id) {

                return c;
            }
        }

        return null;
    }

    // Update Contact
    public void updateContact(Contact contact) {

        for (Contact c : list) {

            if (c.getId() == contact.getId()) {

                c.setName(contact.getName());
                c.setPhone(contact.getPhone());
                c.setEmail(contact.getEmail());
            }
        }
    }
}
