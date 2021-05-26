def deaf_grandma():
    
    goodbyes = 0
    print("HI SON!")
    
    while goodbyes < 2:
        said_to_grandma = input()
   
        if said_to_grandma == "":
            print("WHAT!")
        elif said_to_grandma == "GOODBYE!":
            if goodbyes == 0:
                goodbyes += 1
                print("LEAVING SO SOON?")
            elif goodbyes == 1:
                goodbyes += 1
                print("LATER, SKATER!")
        elif said_to_grandma.isupper():
            print("NO, NOT SINCE 1946!")
        else:
            print("SPEAK UP, KID!")



deaf_grandma()
