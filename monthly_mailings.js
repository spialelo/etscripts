
 
%%[ VAR @rows, @prog, @intro, @title, @subject, @teaser, @url, @UAC  


SET @UAC = UAC
SET @rows = LOOKUPROWS("CME_MM_Mailings","PROGRAM_ID",@prog) ]%%

 
%%[if RowCount(@rows) = 1 then

/* We found one row of data */
SET @row = Row(@rows,1)

/* Set the Intro */
SET @intro = Field(@row,"INTRO")

/* Set the Article title */
SET @title = Field(@row,"TITLE")

/* Set the Subject line */
SET @subject = Field(@row,"SUBJECT_LINE")

/* Set the Teaser */
SET @teaser = Field(@row,"TEASER")

/* Set the URL */
SET @url = Field(@row,"URL")


  ]%%



/* HTML of the 1 article template */
<table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td valign="top" align="left" style="font-family: Arial, Helvetica, sans-serif; color: #751400; font-size: 20px;"><span class="applelinksdate"><font class="activitytext">%%=v(@intro)=%% %%xtmonth%% %%xtday%%, %%xtyear%%</font></span></td>
                      </tr>
                      <tr>
                        <td valign="top" height="10" style="font-size: 1px; line-height: 10px;"><img style="display: block;" height="1" alt="" src="http://img.medscape.com/pi/global/ornaments/spacer.gif" width="1" border="0" /></td>
                      </tr>
                      <tr>
                        <td valign="top" class="cmelink" align="left" style="font-family: Arial, Helvetica, sans-serif; color: #006699; font-size: 20px; font-weight: bold;"><a href="%%=RedirectTo(Concat(@url,'?src=wnl_cme_revw&uac=',@UAC,'&impID=%%JobID%%'))=%%" style="color: #006699; text-decoration: none;" alias="cmereview:header-%%=v(@url)=%%">%%=v(@title)=%%</a></td>
                      </tr>
                      <tr>
                        <td valign="top" height="10" style="font-size: 1px; line-height: 10px;"><img style="display: block;" height="1" alt="" src="http://img.medscape.com/pi/global/ornaments/spacer.gif" width="1" border="0" /></td>
                      </tr>
                      <tr>
                        <td valign="top" class="primary" align="left" style="font-family: Arial, Helvetica, sans-serif; color: #000000; font-size: 16px;">%%=v(@teaser)=%%</td>
                      </tr>
                      <tr>
                        <td valign="top" height="10" style="font-size: 1px; line-height: 10px;"><img style="display: block;" height="1" alt="" src="http://img.medscape.com/pi/global/ornaments/spacer.gif" width="1" border="0" /></td>
                      </tr>
                      <tr>
                        <td valign="top" align="left">
                        <table width="170" border="0" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td bgcolor="#660000" style="font-size: 1px; line-height: 3px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="6" align="left" valign="top" bgcolor="#660000" style="font-size: 1px; line-height: 3px;"><img src="http://images.medscape.com/pi/features/newsletters/cme/cmereview/template/button-topleft.jpg" width="6" height="3" border="0" style="display: block;" /></td>
                                    <td bgcolor="#660000" style="font-size: 1px; line-height: 3px;"><img style="display: block;" height="1" alt="" src="http://images.medscape.com/pi/global/ornaments/spacer.gif" width="1" border="0" /></td>
                                    <td width="6" align="right" valign="top" bgcolor="#660000" style="font-size: 1px; line-height: 3px;"><img src="http://images.medscape.com/pi/features/newsletters/cme/cmereview/template/button-topright.jpg" width="6" height="3" border="0" style="display: block;" /></td>
                                  </tr>
                                </tbody>
                              </table>
                              </td>
                            </tr>
                            <tr>
                              <td height="25" align="center" valign="middle" bgcolor="#660000" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><a href="%%=RedirectTo(Concat(@url,'?src=wnl_cme_revw&uac=',@UAC, '&impID=%%JobID%%'))=%%" style="text-decoration: none; color: #ffffff;" alias="cmereview:button-%%=v(@url)=%%"><strong>Start Activity&nbsp;&rsaquo;</strong></a></td>
                            </tr>
                            <tr>
                              <td bgcolor="#660000" style="font-size: 1px; line-height: 3px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="6" align="left" valign="bottom" bgcolor="#660000" style="font-size: 1px; line-height: 3px;"><img src="http://images.medscape.com/pi/features/newsletters/cme/cmereview/template/button-bottomleft.jpg" width="6" height="3" border="0" style="display: block;" /></td>
                                    <td bgcolor="#660000" style="font-size: 1px; line-height: 3px;"><img style="display: block;" height="1" alt="" src="http://images.medscape.com/pi/global/ornaments/spacer.gif" width="1" border="0" /></td>
                                    <td width="6" align="right" valign="bottom" bgcolor="#660000" style="font-size: 1px; line-height: 3px;"><img src="http://images.medscape.com/pi/features/newsletters/cme/cmereview/template/button-bottomright.jpg" width="6" height="3" border="0" style="display: block;" /></td>
                                  </tr>
                                </tbody>
                              </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>



/* More than one row of data/articles */
%%[elseif RowCount(@rows) > 1 then]%%



%%[

FOR @i = 1 to Rowcount(@rows) DO

SET @row1 = Row(@rows,@i)


/* Set the Article title */
SET @title = Field(@row1,"TITLE")

/* Set the Teaser */
SET @teaser = Field(@row1,"TEASER")

/* Set the URL */
SET @url = Field(@row1,"URL")


/* Set the subject line */
IF @i == 1 THEN SET @subject = Field(@row1,"SUBJECT_LINE")
ENDIF

/* Set the Intro */
IF @i == 1 THEN SET @intro = Field(@row1,"INTRO")
ENDIF


]%%

/* HTML of the multiple article template */
<table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      
                      <tr>
                        <td valign="top" class="cmelink" align="left" style="font-family: Arial, Helvetica, sans-serif; color: #006699; font-size: 16px; font-weight: bold;"><a href="%%=RedirectTo(Concat(@url,'?src=wnl_cme_revw&uac=',@UAC,'&impID=%%JobID%%'))=%%" style="color: #006699; text-decoration: none;" alias="cmereview:header-%%=v(@url)=%%">%%=v(@title)=%%</a></td>
                      </tr>
                      <tr>
                        <td valign="top" height="10" style="font-size: 1px; line-height: 10px;"><img style="display: block;" height="1" alt="" src="http://img.medscape.com/pi/global/ornaments/spacer.gif" width="1" border="0" />
                        
                     %%[if Not Empty(@teaser) then]%%   
                        
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
 <tr>
                        <td valign="top" class="primary" align="left" style="font-family: Arial, Helvetica, sans-serif; color: #000000; font-size: 14px;">%%=v(@teaser)=%%</td>
                      </tr>
                      <tr>
                        <td valign="top" height="10" style="font-size: 1px; line-height: 10px;"><img style="display: block;" height="1" alt="" src="http://img.medscape.com/pi/global/ornaments/spacer.gif" width="1" border="0" /></td>
                      </tr>
</table>

                  %%[endif]%%      
                        
                        </td>
                      </tr>
                     
                      
                    </tbody>
                  </table>



%%[ next @i ]%%



 %%[else]%% 


 %%=RaiseError("Do not send to subscriber.", true)=%% 

 /*Raise error and doesn't send*/



 %%[endif]%%

 