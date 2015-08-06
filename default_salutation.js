%%[VAR @first_name, @last_name, @salutation, @profession

SET @profession = PROFESSION
SET @first_name = FIRST_NAME
SET @last_name = LAST_NAME



if Empty(@first_name) AND not Empty(@last_name) then


           if @profession == "10" OR @profession == "Physician"  then 

                  set @salutation = Concat("Dr. ",ProperCase(Trim(@last_name)))

                else

                  set @salutation = "Clinician"

             endif


elseif not Empty(@first_name) AND not Empty(@last_name) then


             if @profession == "10" OR @profession == "Physician" then 

                 set @salutation = Concat("Dr. ",ProperCase(Trim(@first_name))," ",ProperCase(Trim(@last_name)))

                else

                  set @salutation = Concat(ProperCase(Trim(@first_name))," ",ProperCase(Trim(@last_name)))

              endif


else


            if @profession == "10" OR @profession == "Physician" then 

                  set @salutation = "Physician"

                else

                 set @salutation = "Clinician"

              endif

endif



 ]%%