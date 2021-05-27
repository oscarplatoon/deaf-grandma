def deaf_grandma():
	counter = 0
	print("HEY KID!")
	
	while (counter != 2):
		user_input = input()
		if (user_input == ""):
			print("WHAT?!")
		elif (user_input == "GOODBYE!"):
			if (counter == 0):
				print("LEAVING SO SOON?")
				counter += 1
			elif (counter == 1):
				print("LATER, SKATER!")
				counter += 1
		elif (user_input == user_input.upper()):
			print("NO, NOT SINCE 1946!")
		else:
			print("SPEAK UP, KID!")
			
deaf_grandma()
