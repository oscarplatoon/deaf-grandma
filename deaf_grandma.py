def deaf_grandma():
    
    print("Say something to your Grandma")
    
    response = input()
    good_bye_counter = 0
    checker = "GOODBYE!"
    

    # Goodbye checker
    if response == checker and good_bye_counter == 0:
        good_bye_counter += 1
        print(f"LEAVING SO SOON!?")
        good_bye_one = input()      
    if good_bye_one == "GOODBYE!" :
        print("LATER SKATER!")
        return()
    
    # All other cases
    if response == "" :
        print("WHAT?!")
        deaf_grandma()
    elif response.islower() :
        print("SPEAK UP KID")  
        deaf_grandma()  
    elif response.isupper() :
        print("NO, NOT SINCE 1946!")
        deaf_grandma()


        
    

deaf_grandma()
