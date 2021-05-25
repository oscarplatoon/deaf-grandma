def deaf_grandma():
	goodbye = 0
	print("HEY KID!")
	while(goodbye != 2):
	    text = input()
	    if text == "":
	        print("WHAT?!")
	    elif text == "GOODBYE!":
	        if goodbye == 0:
	            print("LEAVING SO SOON?")
	            goodbye = goodbye+1
	        elif goodbye == 1:
	            print("LATER, SKATER!")
	            goodbye = goodbye+1
	        else:
    	        # This should not print
	            print("COME AGAIN?")
	            goodbye = 0
	    elif text.isupper():
	        print("NO, NOT SINCE 1946!")
	    elif ~text.isupper():
	        print("SPEAK UP, KID!")
	    else:
	        # This should not print
	        print("YOU'RE STILL HERE?")

deaf_grandma()
