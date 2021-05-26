def deaf_grandma():
    
    print("Say something to your Grandma")
    
    
    good_bye_counter = 0
    checker = "GOODBYE!"
    
    while good_bye_counter < 2 :
        response = input()
        if response == "" :
            print("WHAT?!")
            deaf_grandma()
        elif response == checker and good_bye_counter == 1 :
            print("LATER SKATER!")
            return()
        elif response == checker :
            print("LEAVING SO SOON!?")   
            good_bye_counter += 1
        elif response == response.upper() :
            print("NO, NOT SINCE 1946!")
            deaf_grandma()
        else :
            print("SPEAK UP KID!")
            deaf_grandma()
    
     

deaf_grandma()
