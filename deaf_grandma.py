def deaf_grandma():
    print("Say something")
        
    good_bye_counter = 0

    while good_bye_counter < 2:
      x = input()
      if x == "" :
        print("WHAT?!")
        
      elif x =="GOODBYE!" and good_bye_counter==1:
        return print("Later skater!")
        

      elif x =="GOODBYE!":
        print("Leaving so soon?")
        good_bye_counter=good_bye_counter+1

      elif x == x.upper():
        print("NO, NOT SINCE 1946!")
        

      else:
        print("Speak up, KID!")
        
deaf_grandma()

#test