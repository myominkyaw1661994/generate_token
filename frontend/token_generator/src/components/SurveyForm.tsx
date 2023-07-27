import React from 'react';
import { z } from 'zod';
import {
  FormControl,
  Input,
  Box,
  Button,
  Text,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);


const schema = z.object({
  name: z.string().min(3, {message: "Name must be at least 3 character"}),
  phone: z.string().regex(phoneRegex, 'Invalid Phone number'),
  company: z.string().min(4, {message: "Compnay must be at least 3 character"}),
  designation: z.string().min(4, {message: "Designation must be at least 3 character"})
})

type FormData = z.infer<typeof schema>;

const SurveyForm = () => {
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({ resolver: zodResolver(schema)});

  const onSubmit = (data: FormData) => {
    const url = 'http://localhost:3000/api/survey';
    const {name, phone, company, designation} = data;
    const post_data = { name, phone, company_name: company, designation };
    axios.post(url, post_data)
      .then(response => {
        const response_data = response.data[0];
        const {id, name, phone, company_name, designation, token_number} = response_data;
        navigate('/token?value=3', {state: {id, name, phone, company: company_name, designation, token: token_number}});

       })
  };

  return (
    <Box my={30} maxW="600px" mx="auto" border="1px" borderColor="gray.300" padding={10} borderRadius={'md'}>
        <Box textAlign="center" mb={10} fontSize="3xl" fontFamily={"Inter"} fontWeight="semibold"><Text>Survey Form</Text></Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={10}>
          <Input {...register('name')} type='text' name='name' placeholder='Name'/>
          {errors.name && <Text color={'red.300'}>{errors.name.message}</Text>}
        </FormControl>
        <FormControl mb={10}>
          <Input {...register('phone')}type='text' name='phone' placeholder="Phone Number"/>
          {errors.phone && <Text color={'red.300'}>{errors.phone.message}</Text>}
        </FormControl>
        <FormControl mb={10}>
          <Input {...register('company')}type='text'name='company' placeholder='Company Name'/>
          {errors.company && <Text color={'red.300'}>{errors.company.message}</Text>}
        </FormControl>
        <FormControl  mb={10}>
          <Input {...register('designation')}type='text' name='designation' placeholder='Designation'/>
          {errors.designation && <Text color={'red.300'}>{errors.designation.message}</Text>}
        </FormControl>
        <Box my={3}>
          <Button disabled={!isValid} colorScheme='blue' width="50%" type='submit'>Submit</Button>
        </Box>
      </form>
    </Box>
  )
}

export default SurveyForm