"use client";

import ImageContact from "@/public/project_pictures/contact.jpg";

import {
  Button,
  ContactHeading,
  DivBind,
  From,
  FromArea,
  FromContainer,
  FromContent,
  FromContentHeading,
  FromContentImage,
  FromContentText,
  FromWrapper,
  ImageWrapper,
  Input,
  Label,
  MessageArea,
} from "./contactStyle";

function ContactUs() {
  return (
    <FromContainer id="contact">
      <ContactHeading> Contact Us </ContactHeading>
      <FromArea>
        <FromContent>
          <FromContentHeading>Lest talk About Evrything</FromContentHeading>
          <FromContentText>
            Please tell me about your Services. and feel free to order now.
          </FromContentText>
          
        </FromContent>
        <FromWrapper>
          <DivBind>
            <From>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="user_name"
                required
                placeholder="Name"
              />

              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="user_email"
                required
                placeholder="Email"
              />

              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="user_subject"
                required
                placeholder="Subject"
              />
              <Label htmlFor="message">Message</Label>
              <MessageArea
                id="message"
                name="message"
                required
                placeholder="Message Here"
              />
              <Button type="submit">Send</Button>
            </From>
          </DivBind>
        </FromWrapper>
      </FromArea>
    </FromContainer>
  );
}

export default ContactUs;
