import React from 'react'
import checkmark from "../../images/QuaintLikelyFlyingfish-mobile.gif"
import { Link,useNavigate } from 'react-router-dom'
export default function Success() {
    const link=useNavigate();
  return (
    <>
        <div class="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body d-flex flex-column align-items-center justify-content-center">
                        <img className='checkmark' src={checkmark} alt="img" />
                        <h5>Arizangiz muvaffaqiyatli topshirildi</h5>
                        </div>
                        <div className="modal-footer">
                        <btn className='btn btn-success' onClick={()=>link("/account")} data-bs-dismiss="modal">Akkountga o'tish</btn>
                        </div>
                        
                    </div>
                </div>
            </div>
    </>
  )
}
