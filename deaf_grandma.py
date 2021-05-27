from re import findall

def deaf_grandma():
    print("HEY KID!: ")
    import re
    bye_count = 0

    while bye_count < 2:
        your_input = input("Talk to Grandma: ")
        upper_case_test = re.search('[a-z]', your_input)
          
        if your_input == '':
            print("WHAT?!")
        
        elif your_input == ("GOODBYE!") and bye_count == 0:
            print("LEAVING SO SOON?")
            bye_count = 1
        
        elif your_input == ("GOODBYE!") and bye_count == 1:
            print("LATER, SKATER!")
            bye_count = 2
        
        elif your_input == ("I SAID HI, GRANDMA"):
            print("NO, NOT SINCE 1946!")
        
        elif upper_case_test != None:
            print("SPEAK UP, KID!")

        else:
            print("!?!?")
       
      #  elif upper_case_test == ("Goodbye!"):
         #   print("SPEAK UP, KID!")

        
deaf_grandma()
