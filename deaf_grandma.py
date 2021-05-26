def deaf_grandma():

    exit = 0
 
    while exit <=1:
        response = input("Talk to grandma ")
        answer = 0
        if response == "":
            print("WHAT?")
            answer += 1
        elif response.isupper() == 0 and answer == 0:
            print("SPEAK UP, KID?")
            answer = 1
        elif response.isupper() == 1 and answer == 0 and response != "GOODBYE!":
            print("NO, NOT SINCE 1946!")
            answer = 1
        elif response == "GOODBYE!" and exit == 0 and answer == 0:
            print("LEAVING SO SOON?")
            exit +=1
            answer = 1

        elif response == "GOODBYE!" and exit == 1 and answer == 0:
            print("LATER, SKATER!")
            answer = 1
            exit +=1

deaf_grandma()
