import Time "mo:core/Time";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type ContactForm = {
    name : Text;
    phone : Text;
    message : Text;
    service : Text;
    timestamp : Time.Time;
  };

  let leads = Map.empty<Text, ContactForm>();

  public shared ({ caller }) func submitForm(name : Text, phone : Text, message : Text, service : Text) : async () {
    if (leads.containsKey(phone)) {
      Runtime.trap("Form with this phone number already exists. ");
    };
    let newForm : ContactForm = {
      name;
      phone;
      message;
      service;
      timestamp = Time.now();
    };
    leads.add(phone, newForm);
  };

  public query ({ caller }) func getLeads() : async [ContactForm] {
    leads.values().toArray();
  };
};
