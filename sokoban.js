/* Created by Olle Kvarnstrom 
 * Date: 2013-10-01 */

/* Maps: */
var gRawMaps = [["    #####"
                ,"    #   #"
                ,"    #o  #"
                ,"  ###  o##"
                ,"  #  o o #"
                ,"### # ## #   ######"
                ,"#   # ## #####  ..#"
                ,"# o  o          ..#"
                ,"##### ### #@##  ..#"
                ,"    #     #########"
                ,"    #######"
                ],
                ["############"
                ,"#..  #     ###"
                ,"#..  # o  o  #"
                ,"#..  #o####  #"
                ,"#..    @ ##  #"
                ,"#..  # #  o ##"
                ,"###### ##o o #"
                ,"  # o  o o o #"
                ,"  #    #     #"
                ,"  ############"
                ],
                ["        ########"
                ,"        #     @#"
                ,"        # o#o ##"
                ,"        # o  o#"
                ,"        ##o o #"
                ,"######### o # ###"
                ,"#....  ## o  o  #"
                ,"##...    o  o   #"
                ,"#....  ##########"
                ,"########"
                ],
                ["           ########"
                ,"           #  ....#"
                ,"############  ....#"
                ,"#    #  o o   ....#"
                ,"# ooo#o  o #  ....#"
                ,"#  o     o #  ....#"
                ,"# oo #o o o########"
                ,"#  o #     #"
                ,"## #########"
                ,"#    #    ##"
                ,"#     o   ##"
                ,"#  oo#oo  @#"
                ,"#    #    ##"
                ,"###########"
                ],
                ["        #####"
                ,"        #   #####"
                ,"        # #o##  #"
                ,"        #     o #"
                ,"######### ###   #"
                ,"#....  ## o  o###"
                ,"#....    o oo ##"
                ,"#....  ##o  o @#"
                ,"#########  o  ##"
                ,"        # o o  #"
                ,"        ### ## #"
                ,"          #    #"
                ,"          ######"
                ],
                ["######  ###"
                ,"#..  # ##@##"
                ,"#..  ###   #"
                ,"#..     oo #"
                ,"#..  # # o #"
                ,"#..### # o #"
                ,"#### o #o  #"
                ,"   #  o# o #"
                ,"   # o  o  #"
                ,"   #  ##   #"
                ,"   #########"
                ],
                ["       #####"
                ," #######   ##"
                ,"## # @## oo #"
                ,"#    o      #"
                ,"#  o  ###   #"
                ,"### #####o###"
                ,"# o  ### ..#"
                ,"# o o o ...#"
                ,"#    ###...#"
                ,"# oo # #...#"
                ,"#  ### #####"
                ,"####"
                ],
                ["  ####"
                ,"  #  ###########"
                ,"  #    o   o o #"
                ,"  # o# o #  o  #"
                ,"  #  o o  #    #"
                ,"### o# #  #### #"
                ,"#@#o o o  ##   #"
                ,"#    o #o#   # #"
                ,"#   o    o o o #"
                ,"#####  #########"
                ,"  #      #"
                ,"  #      #"
                ,"  #......#"
                ,"  #......#"
                ,"  #......#"
                ,"  ########"
                ],
                ["          #######"
                ,"          #  ...#"
                ,"      #####  ...#"
                ,"      #      . .#"
                ,"      #  ##  ...#"
                ,"      ## ##  ...#"
                ,"     ### ########"
                ,"     # ooo ##"
                ," #####  o o #####"
                ,"##   #o o   #   #"
                ,"#@ o  o    o  o #"
                ,"###### oo o #####"
                ,"     #      #"
                ,"     ########"
                ],
                [" ###  #############"
                ,"##@####       #   #"
                ,"# oo   oo  o o ...#"
                ,"#  ooo#    o  #...#"
                ,"# o   # oo oo #...#"
                ,"###   #  o    #...#"
                ,"#     # o o o #...#"
                ,"#    ###### ###...#"
                ,"## #  #  o o  #...#"
                ,"#  ## # oo o o##..#"
                ,"# ..# #  o      #.#"
                ,"# ..# # ooo ooo #.#"
                ,"##### #       # #.#"
                ,"    # ######### #.#"
                ,"    #           #.#"
                ,"    ###############"
                ],
                ["          ####"
                ,"     #### #  #"
                ,"   ### @###o #"
                ,"  ##      o  #"
                ," ##  o oo## ##"
                ," #  #o##     #"
                ," # # o oo # ###"
                ," #   o #  # o #####"
                ,"####    #  oo #   #"
                ,"#### ## o         #"
                ,"#.    ###  ########"
                ,"#.. ..# ####"
                ,"#...#.#"
                ,"#.....#"
                ,"#######"
                ],
                ["################"
                ,"#              #"
                ,"# # ######     #"
                ,"# #  o o o o#  #"
                ,"# #   o@o   ## ##"
                ,"# #  o o o###...#"
                ,"# #   o o  ##...#"
                ,"# ###ooo o ##...#"
                ,"#     # ## ##...#"
                ,"#####   ## ##...#"
                ,"    #####     ###"
                ,"        #     #"
                ,"        #######"
                ],
                ["   #########"
                ,"  ##   ##  #####"
                ,"###     #  #    ###"
                ,"#  o #o #  #  ... #"
                ,"# # o#@o## # #.#. #"
                ,"#  # #o  #    . . #"
                ,"# o    o # # #.#. #"
                ,"#   ##  ##o o . . #"
                ,"# o #   #  #o#.#. #"
                ,"## o  o   o  o... #"
                ," #o ######    ##  #"
                ," #  #    ##########"
                ," ####"
                ],
                ["       #######"
                ," #######     #"
                ," #     # o@o #"
                ," #oo #   #########"
                ," # ###......##   #"
                ," #   o......## # #"
                ," # ###......     #"
                ,"##   #### ### #o##"
                ,"#  #o   #  o  # #"
                ,"#  o ooo  # o## #"
                ,"#   o o ###oo # #"
                ,"#####     o   # #"
                ,"    ### ###   # #"
                ,"      #     #   #"
                ,"      ########  #"
                ,"             ####"
                ],
                ["   ########"
                ,"   #   #  #"
                ,"   #  o   #"
                ," ### #o   ####"
                ," #  o  ##o   #"
                ," #  # @ o # o#"
                ," #  #      o ####"
                ," ## ####o##     #"
                ," # o#.....# #   #"
                ," #  o..**. o# ###"
                ,"##  #.....#   #"
                ,"#   ### #######"
                ,"# oo  #  #"
                ,"#  #     #"
                ,"######   #"
                ,"     #####"
                ],
                ["#####"
                ,"#   ##"
                ,"#    #  ####"
                ,"# o  ####  #"
                ,"#  oo o   o#"
                ,"###@ #o    ##"
                ," #  ##  o o ##"
                ," # o  ## ## .#"
                ," #  #o##o  #.#"
                ," ###   o..##.#"
                ,"  #    #.*...#"
                ,"  # oo #.....#"
                ,"  #  #########"
                ,"  #  #"
                ,"  ####"
                ],
                ["   ##########"
                ,"   #..  #   #"
                ,"   #..      #"
                ,"   #..  #  ####"
                ,"  #######  #  ##"
                ,"  #            #"
                ,"  #  #  ##  #  #"
                ,"#### ##  #### ##"
                ,"#  o  ##### #  #"
                ,"# # o  o  # o  #"
                ,"# @o  o   #   ##"
                ,"#### ## #######"
                ,"   #    #"
                ,"   ######"
                ],
                ["     ###########"
                ,"     #  .  #   #"
                ,"     # #.    @ #"
                ," ##### ##..# ####"
                ,"##  # ..###     ###"
                ,"# o #...   o #  o #"
                ,"#    .. ##  ## ## #"
                ,"####o##o# o #   # #"
                ,"  ## #    #o oo # #"
                ,"  #  o # #  # o## #"
                ,"  #               #"
                ,"  #  ###########  #"
                ,"  ####         ####"
                ],
                ["  ######"
                ,"  #   @####"
                ,"##### o   #"
                ,"#   ##    ####"
                ,"# o #  ##    #"
                ,"# o #  ##### #"
                ,"## o  o    # #"
                ,"## o o ### # #"
                ,"## #  o  # # #"
                ,"## # #o#   # #"
                ,"## ###   # # ######"
                ,"#  o  #### # #....#"
                ,"#    o    o   ..#.#"
                ,"####o  o# o   ....#"
                ,"#       #  ## ....#"
                ,"###################"
                ],
                ["    ##########"
                ,"#####        ####"
                ,"#     #   o  #@ #"
                ,"# #######o####  ###"
                ,"# #    ## #  #o ..#"
                ,"# # o     #  #  #.#"
                ,"# # o  #     #o ..#"
                ,"# #  ### ##     #.#"
                ,"# ###  #  #  #o ..#"
                ,"# #    #  ####  #.#"
                ,"# #o   o  o  #o ..#"
                ,"#    o # o o #  #.#"
                ,"#### o###    #o ..#"
                ,"   #    oo ###....#"
                ,"   #      ## ######"
                ,"   ########"
                ],
                ["#########"
                ,"#       #"
                ,"#       ####"
                ,"## #### #  #"
                ,"## #@##    #"
                ,"# ooo o  oo#"
                ,"#  # ## o  #"
                ,"#  # ##  o ####"
                ,"####  ooo o#  #"
                ," #   ##   ....#"
                ," # #   # #.. .#"
                ," #   # # ##...#"
                ," ##### o  #...#"
                ,"     ##   #####"
                ,"      #####"
                ],
                ["######     ####"
                ,"#    #######  #####"
                ,"#   o#  #  o  #   #"
                ,"#  o  o  o # o o  #"
                ,"##o o   # @# o    #"
                ,"#  o ########### ##"
                ,"# #   #.......# o#"
                ,"# ##  # ......#  #"
                ,"# #   o........o #"
                ,"# # o #.... ..#  #"
                ,"#  o o####o#### o#"
                ,"# o   ### o   o  ##"
                ,"# o     o o  o    #"
                ,"## ###### o ##### #"
                ,"#         #       #"
                ,"###################"
                ],
                ["    #######"
                ,"    #  #  ####"
                ,"##### o#o #  ##"
                ,"#.. #  #  #   #"
                ,"#.. # o#o #  o####"
                ,"#.  #     #o  #  #"
                ,"#..   o#  # o    #"
                ,"#..@#  #o #o  #  #"
                ,"#.. # o#     o#  #"
                ,"#.. #  #oo#o  #  ##"
                ,"#.. # o#  #  o#o  #"
                ,"#.. #  #  #   #   #"
                ,"##. ####  #####   #"
                ," ####  ####   #####"
                ],
                ["###############"
                ,"#..........  .####"
                ,"#..........oo.#  #"
                ,"###########o #   ##"
                ,"#      o  o     o #"
                ,"## ####   #  o #  #"
                ,"#      #   ##  # ##"
                ,"#  o#  # ##  ### ##"
                ,"# o #o###    ### ##"
                ,"###  o #  #  ### ##"
                ,"###    o ## #  # ##"
                ," # o  #  o  o o   #"
                ," #  o  o#ooo  #   #"
                ," #  #  o      #####"
                ," # @##  #  #  #"
                ," ##############"
                ],
                ["####"
                ,"#  ##############"
                ,"#  #   ..#......#"
                ,"#  # # ##### ...#"
                ,"##o#    ........#"
                ,"#   ##o######  ####"
                ,"# o #     ######@ #"
                ,"##o # o   ######  #"
                ,"#  o #ooo##       #"
                ,"#      #    #o#o###"
                ,"# #### #ooooo    #"
                ,"# #    o     #   #"
                ,"# #   ##        ###"
                ,"# ######o###### o #"
                ,"#        #    #   #"
                ,"##########    #####"
                ],
                [" #######"
                ," #  #  #####"
                ,"##  #  #...###"
                ,"#  o#  #...  #"
                ,"# o #oo ...  #"
                ,"#  o#  #... .#"
                ,"#   # o########"
                ,"##o       o o #"
                ,"##  #  oo #   #"
                ," ######  ##oo@#"
                ,"      #      ##"
                ,"      ########"
                ],
                [" #################"
                ," #...   #    #   ##"
                ,"##.....  o## # #o #"
                ,"#......#  o  #    #"
                ,"#......#  #  # #  #"
                ,"######### o  o o  #"
                ,"  #     #o##o ##o##"
                ," ##   o    # o    #"
                ," #  ## ### #  ##o #"
                ," # o oo     o  o  #"
                ," # o    o##o ######"
                ," #######  @ ##"
                ,"       ######"
                ],
                ["         #####"
                ,"     #####   #"
                ,"    ## o  o  ####"
                ,"##### o  o o ##.#"
                ,"#       oo  ##..#"
                ,"#  ###### ###.. #"
                ,"## #  #    #... #"
                ,"# o   #    #... #"
                ,"#@ #o ## ####...#"
                ,"####  o oo  ##..#"
                ,"   ##  o o  o...#"
                ,"    # oo  o #  .#"
                ,"    #   o o  ####"
                ,"    ######   #"
                ,"         #####"
                ],
                ["#####"
                ,"#   ##"
                ,"# o  #########"
                ,"## # #       ######"
                ,"## #   o#o#@  #   #"
                ,"#  #      o #   o #"
                ,"#  ### ######### ##"
                ,"#  ## ..*..... # ##"
                ,"## ## *.*..*.* # ##"
                ,"# o########## ##o #"
                ,"#  o   o  o    o  #"
                ,"#  #   #   #   #  #"
                ,"###################"
                ],
                ["       ###########"
                ,"       #   #     #"
                ,"#####  #     o o #"
                ,"#   ##### o## # ##"
                ,"# o ##   # ## o  #"
                ,"# o  @oo # ##ooo #"
                ,"## ###   # ##    #"
                ,"## #   ### #####o#"
                ,"## #     o  #....#"
                ,"#  ### ## o #....##"
                ,"# o   o #   #..o. #"
                ,"#  ## o #  ##.... #"
                ,"#####   ######...##"
                ,"    #####    #####"
                ],
                ["  ####"
                ,"  #  #########"
                ," ##  ##  #   #"
                ," #  o# o@o   ####"
                ," #o  o  # o o#  ##"
                ,"##  o## #o o     #"
                ,"#  #  # #   ooo  #"
                ,"# o    o  o## ####"
                ,"# o o #o#  #  #"
                ,"##  ###  ###o #"
                ," #  #....     #"
                ," ####......####"
                ,"   #....####"
                ,"   #...##"
                ,"   #...#"
                ,"   #####"
                ],
                ["      ####"
                ,"  #####  #"
                ," ##     o#"
                ,"## o  ## ###"
                ,"#@o o # o  #"
                ,"#### ##   o#"
                ," #....#o o #"
                ," #....#   o#"
                ," #....  oo ##"
                ," #... # o   #"
                ," ######o o  #"
                ,"      #   ###"
                ,"      #o ###"
                ,"      #  #"
                ,"      ####"
                ],
                [" ###########"
                ," #     ##  #"
                ," #   o   o #"
                ,"#### ## oo #"
                ,"#   o #    #"
                ,"# ooo # ####"
                ,"#   # # o ##"
                ,"#  #  #  o #"
                ,"# o# o#    #"
                ,"#   ..# ####"
                ,"####.. o #@#"
                ,"#.....# o# #"
                ,"##....#  o #"
                ," ##..##    #"
                ,"  ##########"
                ],
                [" #########"
                ," #....   ##"
                ," #.#.#  o ##"
                ,"##....# # @##"
                ,"# ....#  #  ##"
                ,"#     #o ##o #"
                ,"## ###  o    #"
                ," #o  o o o#  #"
                ," # #  o o ## #"
                ," #  ###  ##  #"
                ," #    ## ## ##"
                ," #  o #  o  #"
                ," ###o o   ###"
                ,"   #  #####"
                ,"   ####"
                ],
                ["############ ######"
                ,"#   #    # ###....#"
                ,"#   oo#   @  .....#"
                ,"#   # ###   # ....#"
                ,"## ## ###  #  ....#"
                ," # o o     # # ####"
                ," #  o o##  #      #"
                ,"#### #  #### # ## #"
                ,"#  # #o   ## #    #"
                ,"# o  o  # ## #   ##"
                ,"# # o o    # #   #"
                ,"#  o ## ## # #####"
                ,"# oo     oo  #"
                ,"## ## ### o  #"
                ," #    # #    #"
                ," ###### ######"
                ],
                ["            #####"
                ,"#####  ######   #"
                ,"#   ####  o o o #"
                ,"# o   ## ## ##  ##"
                ,"#   o o     o  o #"
                ,"### o  ## ##     ##"
                ,"  # ##### #####oo #"
                ," ##o##### @##     #"
                ," # o  ###o### o  ##"
                ," # o  #   ###  ###"
                ," # oo o #   oo #"
                ," #     #   ##  #"
                ," #######.. .###"
                ,"    #.........#"
                ,"    #.........#"
                ,"    ###########"
                ],
                ["###########"
                ,"#......   #########"
                ,"#......   #  ##   #"
                ,"#..### o    o     #"
                ,"#... o o #   ##   #"
                ,"#...#o#####    #  #"
                ,"###    #   #o  #o #"
                ,"  #  oo o o  o##  #"
                ,"  #  o   #o#o ##o #"
                ,"  ### ## #    ##  #"
                ,"   #  o o ## ######"
                ,"   #    o  o  #"
                ,"   ##   # #   #"
                ,"    #####@#####"
                ,"        ###"
                ],
                ["      ####"
                ,"####### @#"
                ,"#     o  #"
                ,"#   o## o#"
                ,"##o#...# #"
                ," # o...  #"
                ," # #. .# ##"
                ," #   # #o #"
                ," #o  o    #"
                ," #  #######"
                ," ####"
                ],
                ["             ######"
                ," #############....#"
                ,"##   ##     ##....#"
                ,"#  oo##  o @##....#"
                ,"#      oo o#  ....#"
                ,"#  o ## oo # # ...#"
                ,"#  o ## o  #  ....#"
                ,"## ##### ### ##.###"
                ,"##   o  o ##   .  #"
                ,"# o###  # ##### ###"
                ,"#   o   #       #"
                ,"#  o #o o o###  #"
                ,"# ooo# o   # ####"
                ,"#    #  oo #"
                ,"######   ###"
                ,"     #####"
                ],
                ["    ############"
                ,"    #          ##"
                ,"    #  # #oo o  #"
                ,"    #o #o#  ## @#"
                ,"   ## ## # o # ##"
                ,"   #   o #o  # #"
                ,"   #   # o   # #"
                ,"   ## o o   ## #"
                ,"   #  #  ##  o #"
                ,"   #    ## oo# #"
                ,"######oo   #   #"
                ,"#....#  ########"
                ,"#.#... ##"
                ,"#....   #"
                ,"#....   #"
                ,"#########"
                ],
                ["           #####"
                ,"          ##   ##"
                ,"         ##     #"
                ,"        ##  oo  #"
                ,"       ## oo  o #"
                ,"       # o    o #"
                ,"####   #   oo #####"
                ,"#  ######## ##    #"
                ,"#.            ooo@#"
                ,"#.# ####### ##   ##"
                ,"#.# #######. #o o##"
                ,"#........... #    #"
                ,"##############  o #"
                ,"             ##  ##"
                ,"              ####"
                ],
                ["     ########"
                ,"  ####      ######"
                ,"  #    ## o o   @#"
                ,"  # ## ##o#o o o##"
                ,"### ......#  oo ##"
                ,"#   ......#  #   #"
                ,"# # ......#o  o  #"
                ,"# #o...... oo# o #"
                ,"#   ### ###o  o ##"
                ,"###  o  o  o  o #"
                ,"  #  o  o  o  o #"
                ,"  ######   ######"
                ,"       #####"
                ],
                ["        #######"
                ,"    #####  #  ####"
                ,"    #   #   o    #"
                ," #### #oo ## ##  #"
                ,"##      # #  ## ###"
                ,"#  ### o#o  o  o  #"
                ,"#...    # ##  #   #"
                ,"#...#    @ # ### ##"
                ,"#...#  ###  o  o  #"
                ,"######## ##   #   #"
                ,"          #########"
                ],
                [" #####"
                ," #   #"
                ," # # #######"
                ," #      o@######"
                ," # o ##o ###   #"
                ," # #### o    o #"
                ," # ##### #  #o ####"
                ,"##  #### ##o      #"
                ,"#  o#  o  # ## ## #"
                ,"#         # #...# #"
                ,"######  ###  ...  #"
                ,"     #### # #...# #"
                ,"          # ### # #"
                ,"          #       #"
                ,"          #########"
                ],
                ["##### ####"
                ,"#...# #  ####"
                ,"#...###  o  #"
                ,"#....## o  o###"
                ,"##....##   o  #"
                ,"###... ## o o #"
                ,"# ##    #  o  #"
                ,"#  ## # ### ####"
                ,"# o # #o  o    #"
                ,"#  o @ o    o  #"
                ,"#   # o oo o ###"
                ,"#  ######  ###"
                ,"# ##    ####"
                ,"###"
                ],
                ["##########"
                ,"#        ####"
                ,"# ###### #  ##"
                ,"# # o o o  o #"
                ,"#       #o   #"
                ,"###o  oo#  ###"
                ,"  #  ## # o##"
                ,"  ##o#   o @#"
                ,"   #  o o ###"
                ,"   # #   o  #"
                ,"   # ##   # #"
                ,"  ##  ##### #"
                ,"  #         #"
                ,"  #.......###"
                ,"  #.......#"
                ,"  #########"
                ],
                ["         ####"
                ," #########  ##"
                ,"##  o      o #####"
                ,"#   ## ##   ##...#"
                ,"# #oo o oo#o##...#"
                ,"# #   @   #   ...#"
                ,"#  o# ###oo   ...#"
                ,"# o  oo  o ##....#"
                ,"###o       #######"
                ,"  #  #######"
                ,"  ####"
                ],
                ["  #########"
                ,"  #*.*#*.*#"
                ,"  #.*.*.*.#"
                ,"  #*.*.*.*#"
                ,"  #.*.*.*.#"
                ,"  #*.*.*.*#"
                ,"  ###   ###"
                ,"    #   #"
                ,"###### ######"
                ,"#           #"
                ,"# o o o o o #"
                ,"## o o o o ##"
                ," #o o o o o#"
                ," #   o@o   #"
                ," #  #####  #"
                ," ####   ####"
                ],
                ["       ####"
                ,"       #  ##"
                ,"       #   ##"
                ,"       # oo ##"
                ,"     ###o  o ##"
                ,"  ####    o   #"
                ,"###  # #####  #"
                ,"#    # #....o #"
                ,"# #   o ....# #"
                ,"#  o # #.*..# #"
                ,"###  #### ### #"
                ,"  #### @o  ##o##"
                ,"     ### o     #"
                ,"       #  ##   #"
                ,"       #########"
                ],
                ["      ############"
                ,"     ##..    #   #"
                ,"    ##..* o    o #"
                ,"   ##..*.# # # o##"
                ,"   #..*.# # # o  #"
                ,"####...#  #    # #"
                ,"#  ## #          #"
                ,"# @o o ###  #   ##"
                ,"# o   o   # #   #"
                ,"###oo   # # # # #"
                ,"  #   o   # # #####"
                ,"  # o# #####      #"
                ,"  #o   #   #    # #"
                ,"  #  ###   ##     #"
                ,"  #  #      #    ##"
                ,"  ####      ######"
                ]
               ];

/* Constants */
var CANVAS_WIDTH = 400;
var CANVAS_HEIGHT = 400;
var TILE_SIZE = 20;

/* Mutable things: */
var gCanvasContext;
var gMap;
var gPlayerPos;
var gLevelNumber;

/* newGame destroys the old level and creates a new one */
function newGame(level) {

  /* If level is null, pick a random level */
  if (level == "random") level = Math.floor(Math.random() * gRawMaps.length);

  /* thisMap will be the level to load */
  thisMap = gRawMaps[level];

  /* Clear gMap and canvas: */
  gCanvasContext.fillStyle = "white";
  gCanvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gMap = [];

  /* Create new gMap and draw it to screen */
  gCanvasContext.fillStyle = "black";
  for (var i = 0; i < thisMap.length; i++) {
    for (var j = 0, tmparr = []; j < thisMap[i].length; j++) {
      switch (thisMap[i][j]) {
        case ' ': tmparr.push(0); break;
        case '#': tmparr.push(1); break;
        case 'o': tmparr.push(2); break;
        case '*': tmparr.push(3); break;
        case '@': tmparr.push(4); gPlayerPos = [j, i]; break;
        case '+': tmparr.push(5); break;
        case '.': tmparr.push(6); break;
      }
      gCanvasContext.fillText(thisMap[i][j], j*TILE_SIZE, i*TILE_SIZE);
    }
    gMap.push(tmparr);
  }
}

/* Handle events */
function handleEvent(event) {

  /* Read wasd / hjkl or returns */
  switch (event.keyCode) {
    case 97:  case 104: /* a/h -> moveLeft */ 
      var dx = -1, dy = 0; break;
    case 115: case 106: /* s/j -> moveDown */ 
      var dx = 0, dy = 1; break;
    case 119: case 107: /* w/k -> moveUp */ 
      var dx = 0, dy = -1; break;
    case 100: case 108: /* d/l -> moveRight */ 
      var dx = 1; dy = 0; break;
    default: return; break;
  }

  /* Remove player from old position and add to new */
  function redraw_player(dx, dy) {

    /* undraw */
    gCanvasContext.fillStyle = "white";
    gCanvasContext.fillRect(gPlayerPos[0]*TILE_SIZE, gPlayerPos[1]*TILE_SIZE, 
                            TILE_SIZE, TILE_SIZE + 5);
    if (gMap[gPlayerPos[1]][gPlayerPos[0]] == 4) {
      gMap[gPlayerPos[1]][gPlayerPos[0]] = 0;
    } else {
      gMap[gPlayerPos[1]][gPlayerPos[0]] = 6;
      gCanvasContext.fillStyle = "black";
      gCanvasContext.fillText('.', gPlayerPos[0]*TILE_SIZE, 
                                   gPlayerPos[1]*TILE_SIZE);
    }
    /* redraw */
    gPlayerPos[0] += dx;
    gPlayerPos[1] += dy;
    gCanvasContext.fillStyle = "white";
    gCanvasContext.fillRect(gPlayerPos[0]*TILE_SIZE, gPlayerPos[1]*TILE_SIZE, 
                            TILE_SIZE, TILE_SIZE + 5);
    gCanvasContext.fillStyle = "black";
    if (gMap[gPlayerPos[1]][gPlayerPos[0]] == 0) {
      gMap[gPlayerPos[1]][gPlayerPos[0]] = 4;
      gCanvasContext.fillText('@', gPlayerPos[0]*TILE_SIZE, 
                                   gPlayerPos[1]*TILE_SIZE);
    } else {
      gMap[gPlayerPos[1]][gPlayerPos[0]] = 5;
      gCanvasContext.fillText('+', gPlayerPos[0]*TILE_SIZE, 
                                   gPlayerPos[1]*TILE_SIZE);
    }
  }

  switch (gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx]) {
    case 0: redraw_player(dx, dy); break; /* Open ground */
    case 1: return; break; /* Wall */
    case 2: var current = 2;/* Stone */
    case 3: /* Stone in place */
      switch (gMap[gPlayerPos[1] + (2*dy)][gPlayerPos[0] + (2*dx)]) {
        case 0: /* Empty space */
          gMap[gPlayerPos[1] + (2*dy)][gPlayerPos[0] + (2*dx)] = 2;
          gCanvasContext.fillStyle = "black";
          gCanvasContext.fillText('o', (gPlayerPos[0] + (2*dx)) * TILE_SIZE, 
                                       (gPlayerPos[1] + (2*dy)) * TILE_SIZE);
          if (current == 2) gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx] = 0;
          else gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx] = 6;
          redraw_player(dx, dy);
          break;
        case 6: /* Socket */
          gMap[gPlayerPos[1] + (2*dy)][gPlayerPos[0] + (2*dx)] = 3;
          gCanvasContext.fillStyle = "white";
          gCanvasContext.fillRect((gPlayerPos[0] + (2*dx)) * TILE_SIZE, 
                                  (gPlayerPos[1] + (2*dy)) * TILE_SIZE, 
                                  TILE_SIZE, TILE_SIZE + 5);
          gCanvasContext.fillStyle = "black";
          gCanvasContext.fillText('*', (gPlayerPos[0] + (2*dx)) * TILE_SIZE, 
                                       (gPlayerPos[1] + (2*dy)) * TILE_SIZE);
          if (current == 2) gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx] = 0;
          else gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx] = 6;
          redraw_player(dx, dy);

          /* Check if player has won */
          for (var i = 0; i < gMap.length; i++) 
            for (var j = 0; j < gMap[i].length; j++) 
              if (gMap[i][j] == 2) return;

          /* Go to new page: */
          if (gLevelNumber == "random") newGame(gLevelNumber);
          else window.location.href = "index.html?level=" + ++gLevelNumber;

          break;
      } break;
    case 6: redraw_player(dx, dy); break; /* Socket */
  }
}

function initMain(canvasName) {

  /* index.html -> index.html?level=0
   * index.html?level=random -> random */
  var level = window.location.search;
  if (level.length >= 8 && level.substring(0,7) == "?level=") 
    level = level.substring(7);
  else level = 0;

  var canvas = document.getElementById(canvasName);
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT
  canvas.addEventListener("keypress", handleEvent, false);
  gCanvasContext = canvas.getContext("2d");
  gCanvasContext.font = "bold " + TILE_SIZE + "px sans-serif";
  gCanvasContext.textBaseline = "top";

  gLevelNumber = parseInt(level, 10);
  newGame(gLevelNumber);
}

