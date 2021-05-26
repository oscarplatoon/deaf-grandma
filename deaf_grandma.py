def deaf_grandma():
    prompt = input('HEY KID!')
    goodbye_count = 0

    # Only exits once input "GOODBYE!" x 2
    while (goodbye_count != 2):
        prompt = input()
        if (prompt == 'GOODBYE!'):
            if (goodbye_count == 0):
                goodbye_count += 1
                print('LEAVING SO SOON?')
            else:
                goodbye_count += 1
            # print(goodbye_count)     
        elif (prompt == ''):
            print('WHAT?!')
        elif (prompt == prompt.lower()):
            print('SPEAK UP KID!')
        elif (prompt == prompt.upper()):
            print('NO, NOT SINCE 1946!')

    print('LATER, SKATER!')


deaf_grandma()
