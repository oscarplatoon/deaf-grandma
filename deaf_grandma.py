def deaf_grandma():
    count = 0
    response = input("HEY KID!\n")
    while count < 2:
        if(response == ''):
            response = input('WHAT?!\n')
        elif(response == 'GOODBYE!'):
            response = input('LEAVING SO SOON?\n')
            count += 1
            if(count == 1):
                print('LATER, SKATER!')
                return
        elif(any(c for c in response if c.islower())):
            response = input('SPEAK UP, KID!\n')
        elif(response.isupper()):
            response = input('NO, NOT SINCE 1946!\n')
        else:
            print("Invalid input")
            return
deaf_grandma()
