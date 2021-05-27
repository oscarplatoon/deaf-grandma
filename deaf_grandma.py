goodbye_count = 0


def deaf_grandma():
    global goodbye_count
    prompt = input("Say Something?")

    if prompt == '':
        print('WHAT?!')
        deaf_grandma()
    elif prompt == prompt.upper() and prompt != "GOODBYE!":
        print('NO, NOT SINCE 1946!')
        deaf_grandma()
    elif prompt == "GOODBYE!" and goodbye_count == 0:
        print('LEAVING SO SOON?')
        goodbye_count = goodbye_count + 1
        deaf_grandma()
    elif prompt == "GOODBYE!" and goodbye_count == 1:
        print('LATER, SKATER!')
    else:
        print('SPEAK UP, KID!')
        deaf_grandma()


deaf_grandma()