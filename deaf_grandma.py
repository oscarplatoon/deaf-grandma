def deaf_grandma():
    
    print("Say something to your Grandma")
    
    response = input()
    good_bye_counter = 0
    checker = "GOODBYE!"
    

    # 
    if response == "" :
        print("WHAT?!")
        deaf_grandma()
    elif response.islower() :
        print("SPEAK UP KID")  
        deaf_grandma()  
    elif response.isupper() and response != checker:
        print("NO, NOT SINCE 1946!")
        deaf_grandma()
    # 
    elif response == checker and good_bye_counter == 0:
        good_bye_counter += 1
        print(f"LEAVING SO SOON!?")
        response = input()   
    elif response == "GOODBYE!" :
        print("LATER SKATER!")   
    else :
        response = input()

deaf_grandma()
