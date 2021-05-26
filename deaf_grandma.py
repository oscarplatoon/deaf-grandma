def deaf_grandma():
   
    print ('Grandma')
    
    reply = input()
    good_bye_counter = 0
    check = "GOODBYE!"

    if reply == "":
        print('WHAT?!')
        deaf_grandma()
    elif reply.islower():
        print('SPEAK UP, KID!')
        deaf_grandma()
    elif reply.isupper() and reply != check:
        print('NO, NOT SINCE 1946!')
        deaf_grandma()
    elif reply == check and good_bye_counter == 0:
        good_bye_counter += 1
        print("LEAVING SO SOON!?")
         reply = input()  
    elif reply == "GOODBYE!":
        print("LATER SKATER!")   
    else:
        reply = input()
        deaf_grandma()

deaf_grandma()
