"use client";
import { gql, DocumentNode } from "@apollo/client";
export const REGISTER_USER: DocumentNode = gql`
	mutation RegisterUser(
		$name: String!
		$email: String!
		$password: String!
		$phone_number: String!
	) {
		register(
			name: $name
			email: $email
			password: $password
			phone_number: $phone_number
		) {
			activation_token
		}
	}
`;
