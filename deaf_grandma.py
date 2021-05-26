def deaf_grandma():
    print("HEY KID!")

    count = 0
    while count < 2:
        cmd = input("Respond to your grandma:")
        if cmd == "":
            print("WHAT?!")
        elif cmd == "GOODBYE!":
            count += 1
            if count == 1:
                print("LEAVING SO SOON?")
            elif count == 2:
                print("LATER, SKATER!")
        elif cmd.islower():
            print("SPEAK UP, KID!")
        elif cmd.isupper():
            print("NO, NOT SINCE 1946!")
        


deaf_grandma()
