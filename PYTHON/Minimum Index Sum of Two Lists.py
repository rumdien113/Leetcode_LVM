class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        m = len(list1) + len(list2)
        list = []
        for i in range (len(list1)):
            if (list1[i] in list2):
                if (i+list2.index(list1[i]) <= m):
                    if list == None:
                        list.append(list1[i])
                    elif m == i+list2.index(list1[i]):
                        list.append(list1[i])
                    else:
                        list = []
                        list.append(list1[i])
                    m = i+list2.index(list1[i])
        return list