const express = require('express');
const cors = require('cors');
const pool = require ('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=> {
    try{
        res.json('WELCOME to HR API')
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/region',async(req,res)=> {
    try{
       const result = await pool.query('select * from regions');
       res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});
app.get('/employeees',async(req,res)=> {
    try{
       const result = await pool.query('select * from employees');
       res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/country',async(req,res)=> {
    try{
       const result = await pool.query('select * from countries');
       res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});


app.get('/employee',async(req,res)=> {
    try{
       const result = await pool.query('select count(employee_id) from employees ');
       res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});


app.get('/job',async(req,res) =>{
try{
    const result = await pool.query('select * from jobs');
    res.json(result.rows);
}catch(err){
    res.status(500).json({Error:err.message})
}
});


app.get('/department',async(req,res) =>{
    try{
        const result = await pool.query('select * from departments');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
    });

    app.get('/location',async(req,res) =>{
        try{
            const result = await pool.query('select * from locations');
            res.json(result.rows);
        }catch(err){
            res.status(500).json({Error:err.message})
        }
        });

        app.get('/records',async(req,res) =>{
            try{
                const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.start_date, j.job_id,j.job_title,d.department_id,d.department_name,l.location_id,city,postal_code,c.country_id,c.country_name from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  jobs j on jh.job_id = j.job_id left outer join departments d on jh.department_id = d.department_id inner join locations l on d.location_id = l.location_id  inner join countries c on l.country_id = c.country_id limit 3');
                res.json(result.rows);
            }catch(err){
                res.status(500).json({Error:err.message})
            }
            });



        app.get('/totalemp',async(req,res) =>{
            try{
                const result = await pool.query('select count(employee_id) from employees');
                res.json(result.rows);
            }catch(err){
                res.status(500).json({Error:err.message})
            }
            });




            app.get('/totalcntry',async(req,res) =>{
                try{
                    const result = await pool.query('select count(country_id) from countries');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({Error:err.message})
                }
                });



                app.get('/totalloc',async(req,res) =>{
                    try{
                        const result = await pool.query('select count(location_id) from locations');
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({Error:err.message})
                    }
                    });




                    app.get('/totaldep',async(req,res) =>{
                        try{
                            const result = await pool.query('select count(department_id) from departments');
                            res.json(result.rows);
                        }catch(err){
                            res.status(500).json({Error:err.message})
                        }
                        });


                        app.get('/totaljob',async(req,res) =>{
                            try{
                                const result = await pool.query('select count(job_id) from jobs');
                                res.json(result.rows);
                            }catch(err){
                                res.status(500).json({Error:err.message})
                            }
                            });


                            app.get('/totalreg',async(req,res) =>{
                                try{
                                    const result = await pool.query('select count(region_id) from regions');
                                    res.json(result.rows);
                                }catch(err){
                                    res.status(500).json({Error:err.message})
                                }
                                });

const PORT = process.env.PORT || 6005;
app.listen(PORT,()=>{
    console.log(`Connected Successfully...on PORT ${PORT}`)
});