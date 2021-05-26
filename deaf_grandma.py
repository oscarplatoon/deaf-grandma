def deaf_grandma():
    goodbye_count = 0
    print('HEY KID!')
    while goodbye_count < 2:
        response = input()
        if response == '':
            print('WHAT?!')
        elif response == 'GOODBYE!':
            if goodbye_count == 1:
                print('LATER SKATER!')
                return
            else:
                print('LEAVING SO SOON?')
                goodbye_count += 1
        elif response == response.upper():
            print('NO, NOT SINCE 1942')
        for letter in response:
            if letter.isalpha() and letter == letter.lower():
                print('SPEAK UP, KID!')
                break
        

    


deaf_grandma()
