import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PrivilegeInform() {
  return (
    <div className='w-100 mt-1'>
      <div>
        <Accordion className='accordionItem'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Chet tili sertifikati</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className='d-flex flex-xl-row flex-column justify-content-between'>
                <div className="form addEducationInput">
                  <label>Chet tili*</label>
                  <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Chet tilini tanlang</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form addEducationInput">
                  <label>Sertifikat turi*</label>
                  <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>IELTS</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className='d-flex flex-xl-row flex-column justify-content-between'>
                <div className="form addEducationInput">
                  <label>Daraja*</label>
                  <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Chet tilini tanlang</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form addEducationInput">
                  <label>Seriya raqamni kiriting**</label>
                  <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>AA12345</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className='d-flex flex-xl-row flex-column justify-content-between'>
                <div className="form addEducationInput">
                  <label>Hujjat berilgan sana*</label>
                  <div className="form d-flex">
                    <select class="form-select w-25" aria-label="Default select example">
                      <option selected>3</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select class="form-select w-50" aria-label="Default select example">
                      <option selected>Dekabr</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select class="form-select w-25" aria-label="Default select example">
                      <option selected>2021</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="form addEducationInput">
                  <label>Sertifikatni yuklang pdf,jpg*</label>
                  <input class="form-control mb-2" type="file" id="formFile" />
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordionItem'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Yutuqlar</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className='d-flex flex-xl-row flex-column justify-content-between'>
                <div className="form addEducationInput">
                  <label>Stependiya va davlat mukofoti*</label>
                  <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Kompyuter injeneringi</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form addEducationInput">
                  <label>Hujjat berilgan sana*</label>
                  <div className="form d-flex">
                    <select class="form-select w-25" aria-label="Default select example">
                      <option selected>3</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select class="form-select w-50" aria-label="Default select example">
                      <option selected>Dekabr</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select class="form-select w-25" aria-label="Default select example">
                      <option selected>2021</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form addEducationInput">
                <label>Sertifikatni yuklang pdf,jpg*</label>
                <input class="form-control mb-2" type="file" id="formFile" />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordionItem'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Ko'zi ojizlik</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className='d-flex flex-xl-row flex-column justify-content-between'>
                <div className="form addEducationInput">
                  <label>Hujjat seriyasi*</label>
                  <input type="text" className='form-control mb-3' placeholder='AA' />
                </div>
                <div className="form addEducationInput">
                  <label>Hujjat raqami*</label>
                  <input type="text" className='form-control mb-3' placeholder='123456' />
                </div>
              </div>
              <div className="form">
                <label>Kozi ojizlik toifasi‘*</label>
                <select class="form-select mb-3" aria-label="Default select example">
                  <option selected>Toifani tanlang</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='d-flex flex-xl-row flex-column justify-content-between'>
                <div className="form addEducationInput">
                  <label>Hujjat seriyasi*</label>
                  <div className="form d-flex">
                    <select class="form-select w-25" aria-label="Default select example">
                      <option selected>3</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select class="form-select w-50" aria-label="Default select example">
                      <option selected>Dekabr</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select class="form-select w-25" aria-label="Default select example">
                      <option selected>2021</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="form addEducationInput">
                  <label>Sertifikatni yuklang pdf,jpg*</label>
                  <input class="form-control mb-2" type="file" id="formFile" />
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="w-100 stepperFooter d-flex justify-content-end align-items-center px-4 bg-light mt-3">
        <Link to="/stepper/specialty" className='stepperFooterBtn btn btn-primary d-flex align-items-center justify-content-center'>Keyingi qadam</Link>
      </div>
    </div>
  )
}
