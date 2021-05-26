def deaf_grandma():
    
    print("Say something to your Grandma")
    
    response = input()
    good_bye_counter = 0
    checker = "GOODBYE!"
    

    while response == "" :
        print("WHAT?!")
        response = input()
    while response.islower() :
        print("SPEAK UP KID")
        response = input()
    while response.isupper() and response != checker:
        print("NO, NOT SINCE 1946!")
        response = input()
    while response == checker and good_bye_counter == 0 :
        good_bye_counter += 1
        print("LEAVING SO SOON!?")
        response = input()
    while response == checker and good_bye_counter == 1 :
        print("LATER SKATER!")    
        break

    

deaf_grandma()
