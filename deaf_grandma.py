def deaf_grandma():
    counter = 0
    print('HEY KID!')
    while (counter <= 1):
        granny = input()
    # If you don't input anything (just hit enter) she responds with `WHAT?!`
        if (granny == ''):
            print('WHAT?!')
            continue
            
    # If you talk to her in all upper-case letters, she responds with `NO, NOT SINCE 1946!`
        elif(granny == granny.isupper()) :
            print('NOT SINCE 1946!')
            continue
            
    # The first time you say `GOODBYE!` she says `LEAVING SO SOON?`
        elif(granny == GOODBYE!):
            print("LEAVING SO SOON?!")
            counter += 1
            continue
            
    # The second time you say `GOODBYE!` she says `LATER, SKATER!` and the program exits.
        elif(counter == 1 and granny == GOODBYE!):
            print("LATER SKATER!")
            return 

    #If you ask a question with any lower-case letters, she responds with
    #`SPEAK UP, KID!`
        else:
            print('SPEAK UP KID!')
            continue
            
        
deaf_grandma()



